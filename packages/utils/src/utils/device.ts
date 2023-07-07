/** 设备 */

/** 检查当前窗口是否可见 */
export const isTabActive = () => !document.hidden;

/** 设备监测 */
export const judgeDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
    navigator.userAgent,
  )
    ? 'Mobile'
    : 'PC';
