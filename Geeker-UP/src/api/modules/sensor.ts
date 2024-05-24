import { ResPage, Sensor } from "@/api/interface/index";
import http from "@/api";

/**
 * @name 设备管理模块
 */
// 获取设备列表
export const getSensorClassList = params => {
  return http.post<ResPage<Sensor.SensorClass>>(`/Sensor/GetSensorClassList`, params);
};

export const addSensorClass = (params: Sensor.SensorClass) => {
  return http.post(`/Sensor/AddSensorClassList`, params);
};

export const editSensorClass = (params: Sensor.SensorClass) => {
  return http.post(`/Sensor/UpdateSensorClassList`, params);
};

export const deleteSensorClass = (params: Sensor.SensorClass) => {
  return http.post(`/Sensor/DelSensorClassList`, params);
};

// 获取设备型号列表
export const getSensorTypeList = params => {
  return http.post<ResPage<Sensor.SensorType>>(`/Sensor/GetSensorTypeList`, params);
};

export const addSensorType = (params: Sensor.SensorType) => {
  return http.post(`/Sensor/AddSensorTypeList`, params);
};

export const editSensorType = (params: Sensor.SensorType) => {
  return http.post(`/Sensor/UpdateSensorTypeList`, params);
};

export const delSensorType = (params: Sensor.SensorType) => {
  return http.post(`/Sensor/DelSensorTypeList`, params);
};
