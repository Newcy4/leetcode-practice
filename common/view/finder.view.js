import path from 'node:path'
import select, { Separator } from '@inquirer/select'
import input from '@inquirer/input'
import {
  createQuestionById,
  createQuestionByTitleSlug
} from '#common/utils/cli-utils/createQuestion.js'
import { getQuestionByKeyword } from '#common/utils/question-getter/getQuestionByKeyword.js'
import { getStudyPlanList } from '#common/utils/question-getter/getStudyPlanList.js'
import { getPlanQuestionList } from '#common/utils/question-getter/getPlanQuestionList.js'
import { logger } from '#common/utils/logger/logger.js'
import { getQuestionListCodeBySlug } from '#common/utils/question-handler/getQuestionListCodeBySlug.js'

function handleQuestionList(list) {
  return list.map((item) => ({
    name: `${item.name}${item.premiumOnly ? '(VIP)' : ''}`,
    value: item.slug
  }))
}

async function studyMode(baseDir = process.cwd()) {
  const sprintInterviewCompanyList = await getStudyPlanList(
    'sprint-interview-company'
  )
  const crackingCodingInterviewList = await getStudyPlanList(
    'cracking-coding-interview'
  )
  const deepDiveTopicsList = await getStudyPlanList('deep-dive-topics')
  const questionList = [
    ...handleQuestionList(sprintInterviewCompanyList),
    new Separator(),
    ...handleQuestionList(crackingCodingInterviewList),
    new Separator(),
    ...handleQuestionList(deepDiveTopicsList)
  ]
  const planListMode = {
    message: '请选择学习计划',
    choices: questionList,
    pageSize: 30
  }
  const planSlug = await select(planListMode)
  const createMode = await select({
    message: '拉题模式',
    choices: [
      { name: '单个选择', value: 'single' },
      { name: '全部拉取(不穩定)', value: 'all' }
    ]
  })
  if (createMode === 'single') {
    const { planSubGroups } = await getPlanQuestionList(planSlug)
    const planList = planSubGroups.reduce((acc, cur) => {
      acc.push(
        ...cur.questions.map((res) => {
          return {
            cnTitle: res.translatedTitle,
            enTitle: res.titleSlug
          }
        })
      )
      return acc
    }, [])
    const singleMode = {
      message: '请选择题目?',
      choices: planList.map((res) => ({
        name: res.cnTitle,
        value: res.enTitle
      })),
      pageSize: 30
    }
    const singleChoice = await select(singleMode)

    await createQuestionByTitleSlug(singleChoice, baseDir)
  }
  if (createMode === 'all') {
    await getQuestionListCodeBySlug(
      planSlug,
      path.resolve(baseDir, planSlug.toString())
    )
  }
}

async function keywordMode(baseDir = process.cwd()) {
  const keyword = await input({ message: '请输入关键词', name: 'keyword' })
  const data = await getQuestionByKeyword(keyword)
  const list = data?.map((q) => {
    return {
      name: `${q.frontendQuestionId}.${q.titleCn}`,
      value: q.frontendQuestionId
    }
  })
  const listQuestion = {
    type: 'list',
    name: 'chooseQuestion',
    message: '请选择题目',
    choices: list
  }
  const chooseQuestion = await select(listQuestion)
  await createQuestionById(chooseQuestion, baseDir)
}

async function selectMode(baseDir) {
  logger.info(baseDir)
}

export async function easyFinderView(baseDir = process.cwd()) {
  const choices = [
    { name: '关键词搜索', value: 'keyword', description: '关键词描述' },
    { name: '学习计划', value: 'study', description: '企业和经典面试题目列表' },
    { name: '筛选模式', value: 'select', description: '筛选题目' }
  ]

  const modeQuestion = {
    message: '请选择查找的模式?',
    choices
  }
  const mode = await select(modeQuestion)

  const modeMap = {
    study: studyMode,
    keyword: keywordMode,
    select: selectMode
  }
  await modeMap[mode](baseDir)
}
