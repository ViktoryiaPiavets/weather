export const CityNameAdded = 'CITY_NAME_ADDED';
export const MetricsChanged = 'METRICS_CHANGED';

export const setCityName = (payload) => ({ type: CityNameAdded, payload });
export const changeMetrics = (payload) => ({ type: MetricsChanged, payload });
