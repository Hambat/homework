type Env = {
  production: boolean
};

type widgetType = {
  img: string,
  address: string,
  phone:  string,
  type: string,
  social_info: {
    title: string,
    img: string,
    followers: string,
    following: string
  },
  weather: {
    title: string,
    icon: string,
    water: string,
    temperatur: string
  }
};

type naviType = {
  id: number,
  text_en: string,
  text_ru: string
};
