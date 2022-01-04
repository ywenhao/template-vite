/*
 * @Author: actions
 * @Date: 2021-12-31 10:56:57
 * @LastEditTime: 2021-12-31 17:56:55
 * @LastEditors: actions
 * @Description:
 * @FilePath: \template-vite\typings\gisEye.d.ts
 */
declare global {
  interface Window {
    GisEye: typeof GisEye
  }
}

export declare class GisEye {
  UEAPI: (
    api: UEApi,
    event: UEApiEvent,
    jsonData: UEJsonData | UECallback,
    callback?: UECallback
  ) => void
  constructor(config: ApiConfig)
}

/**
 * 实例化传入的配置参数
 */
export interface ApiConfig {
  ElementID: string
  CloudUrl: string
  MessageUrl: string
}

type Result = 'success' | 'failed'

/**
 * UEAPI api参数
 */
type UEApi = UEApiLevel | UEApiCamera | UEApiPOI | UEApiTime | UEApiWindow

/**
 * UEAPI 事件参数
 */
type UEApiEvent =
  | UEApiLevelEvent
  | UEApiCameraEvent
  | UEApiPOIEvent
  | UEApiTimeEvent
  | UEApiWindowEvent

/**
 * UEAPI jsonData参数
 */
type UEJsonData =
  | UEApiLevelJsonData
  | UEApiCameraJsonData
  | UEApiPOIJsonData
  | UEApiTimeJsonData
  | UEApiWindowJsonData

type UECallbackParams =
  | UEApiLevelCallbackParams
  | UEApiCameraCallbackParams
  | UEApiPOICallbackParams
  | UEApiTimeCallbackParams
  | UEApiWindowCallbackParams

/**
 * UEAPI 回调函数
 */
type UECallback = (e: UECallbackParams) => void

/**
 * UEAPI 参数 - 关卡
 */
type UEApiLevel = 'Level'

type UEApiLevelEvent = 'OpenLevel' | 'SetVisible'

interface UEApiLevelJsonData {
  levelName?: string //关卡名
  unloadOthersLevel?: boolean
  visible?: boolean
}

interface UEApiLevelCallbackParams {
  class_name: UEApiLevel
  func_name: UEApiLevelEvent
  data: {
    result: Result //成功 success  失败 failed
  }
}

/**
 * UEAPI 参数 - 相机
 */
type UEApiCamera = 'GisPawn'

type UEApiCameraEvent =
  | 'GetCameraInfo'
  | 'SetCameraInfo'
  | 'LeftMouse_DoubleClick'
  | 'SetCameraFinish'

interface UEApiCameraJsonData {
  mode?: 'rts' | 'rs' | 's' | 'none' //默认：rts              可设置参数(r代表旋转，t代表移动，s代表缩放)：rts, rs, s, none
  coord_type?: number //默认：0                 可设置参数0:wg84，1:CGCS2000,2,BD09,3,GCJ02
  coord?: string //默认：                设置不存在设置不成功
  pitch?: number //默认：-30            设置俯仰角[-90,-10]
  pitch_range?: [number, number] //默认：[-90,-10]        设置俯仰角范围
  yaw?: number //默认：0                设置偏航角
  distance?: number //默认：1000(m)        设置距离目标点的距离，单位：米
  distance_range?: [number, number] //默认：[100,4000]     设置目标距离范围
  auto_rotation?: boolean //默认：true            设置相机自动旋转
  cutdown_auto_rotation_time?: number //默认：10(s)            设置相机自动旋转倒计时时间（不做任何动作时开始倒计时）
  auto_rotation_dir?: number //默认：-1                设置相机自动旋转方向，负数代表顺时针，正数代表逆时针，数值代表旋转速度
  move_time?: number //默认：1.5(s)            设置移动时间，0代表瞬切
  fov?: number //默认：90                设置视场角
  collision_test?: false //默认：false            设置相机碰撞
  scaling_factor?: number //默认：0.2            设置相机缩放因子
  rotation_factor?: number //默认：0.1            设置相机旋转因子
  hit_highlight?: boolean //默认：true            设置双击物体高亮
  click_focus_distance?: number //默认：1000            设置双击物体聚焦距离
}

interface UEApiCameraCallbackParams {
  class_name: UEApiCamera
  func_name: UEApiCameraEvent
  data: {
    result: Result
  }
}

/**
 * UEAPI 参数 - POI点行为
 */
type UEApiPOI = 'POI'

type UEApiPOIEvent = 'Add' | 'Delete' | 'ClearAllPOI' | 'Update'

// enum POICoordType {
//   wg84 = 0,
//   CGCS2000,
//   BD09,
//   GCJ02
// }

interface UEApiPOIJsonData {
  id: string //POI唯一标识码
  type?: 'default' //默认样式
  coord_type?: number //坐标类型(0:wg84，1:CGCS2000,2,BD09,3,GCJ02)，没有默认为：0
  coord?: string //地理坐标
  imgae_url?: string //图标地址（没有显示默认图标）
  image_force_refresh?: boolean //强制刷新图标
  imgae_size?: [number, number] //图标大小
  imgae_pivot?: [number, number] //图标锚点位置
  imgae_position?: [number, number] //图标位置
  label?: string //标签名（为空就不显示标签）
  label_font_size?: number //标签字体大小
  label_font_color?: [number, number, number, number] //标签颜色
  label_background_color?: [number, number, number, number] //标签背景颜色
  label_pivot?: [number, number] //标签锚点位置
  label_position?: [number, number] //标签位置
  label_always_show?: boolean //总是显示标签
  label_show_range?: [number, number] //如果label_
}

interface UEApiPOICallbackParams {
  class_name: UEApiPOI
  func_name: UEApiPOIEvent
  data: {
    result: Result
  }
}

/**
 * UEAPI 参数 - 覆盖物
 */
type UEApiLayer = 'LayerControl'

type UEApiLayerEvent = 'Add' | 'Delete' | 'ClearAll' | 'Update'

interface UEApiLayerJsonData {
  id: string //唯一值
  coord_type?: number //坐标类型(0:wg84，1:CGCS2000,2,BD09,3,GCJ02)，没有默认为：0
  coords?: string[] | number[] //连续的坐标点
  height?: number //覆盖物的高度，不填默认为：100
  color?: [number, number, number, number] //覆盖物的颜色，不填默认为白色[1,1,1,1]
}

interface UEApiLayerCallbackParams {
  class_name: UEApiLayer
  func_name: UEApiLayerEvent
  data: {
    result: Result
  }
}

/**
 * UEAPI 参数 - 标绘
 */
type UEApiPlotting = 'Plotting'

type UEApiPlottingEvent = 'StartDraw' | 'EndDraw' | 'ClearAll'

interface UEApiPlottingJsonData {
  type: 'point' | 'line' | 'polygon' //类型
  url?: string //图标地址
  force_refresh?: boolean //是否强制刷新图标
  size?: [number, number] //图标大小
  occlusion?: boolean //检查图标遮挡
  color?: [number, number, number, number]
}

interface UEApiPlottingCallbackParams {
  class_name: UEApiPlotting
  func_name: UEApiPlottingEvent
  data: {
    result: Result
  }
}

/**
 * UEAPI 参数 - 场景
 */
type UEApiTime =
  | 'RegisterCloudResponse'
  | 'TimeController'
  | 'WeatherController'

type UEApiTimeEvent = 'setWeather' | 'setTime'

interface UEApiTimeJsonData {
  timeStr?: string
  weatherType?: string
}

interface UEApiTimeCallbackParams {
  class_name: UEApiTime
  func_name: UEApiTimeEvent
  data: {
    result: Result
  }
}

/**
 * UEAPI 参数 - 窗口
 */
type UEApiWindow = 'Window'

type UEApiWindowEvent = 'Add' | 'Delete' | 'ClearAll' | 'Update'

interface UEApiWindowJsonData {
  ids?: string[]
  id?: string //唯一码id
  coord_type?: number //坐标类型(0:wg84，1:CGCS2000,2,BD09,3,GCJ02)，没有默认为：0
  coord?: string //地理坐标
  url?: string //窗口网址
  show?: boolean //是否显示
  size?: [number, number] //窗口大小
  pivot?: [number, number] //窗口锚点
  position?: [number, number]
}

interface UEApiWindowCallbackParams {
  class_name: UEApiWindow
  func_name: UEApiWindowEvent
  data: {
    result: Result
  }
}

// export {};
