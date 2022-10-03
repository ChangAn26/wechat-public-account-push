/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx83f538f686551294',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd10737ae2f60ff17459587b0500ca705',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '洛洛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojfx-6c7zcoE5gir2YO-SGLi9EUI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qRHH0UzPPP7Ld_YuCE3UnQwMFNcAElvH0NQhHibdK5k',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-29',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-30' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojfx-6W_h6g9SDIzEqSoHJSdZuuI',
    }
  ],

}

module.exports = USER_CONFIG

