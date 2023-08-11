export interface IChampionPlace {
  image_url: string
  name: string,
  description: string
}

export interface IChampion {
    image_url: string
    title: string,
    first_place: IChampionPlace,
    second_place: IChampionPlace,
    third_place: IChampionPlace
}

export interface IChampionResponce {
  data: IChampion[]
}