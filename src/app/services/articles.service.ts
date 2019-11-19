import { Injectable } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  text: string;
  bg: string;
  image: string;
  shown: boolean;
};
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Article[] = [
    {
      id: 0,
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis fugiat in nobis officiis placeat porro tenetur. Aliquid aspernatur dolorem eligendi et, illum ipsum nulla qui quidem quis sed, voluptas!',
      bg: 'dark-content',
      image: '',
      shown: true
    },
    {
      id: 1,
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis fugiat in nobis officiis placeat porro tenetur. Aliquid aspernatur dolorem eligendi et, illum ipsum nulla qui quidem quis sed, voluptas!',
      bg: 'bg2-content',
      image: '',
      shown: true
    },
    {
      id: 2,
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis fugiat in nobis officiis placeat porro tenetur. Aliquid aspernatur dolorem eligendi et, illum ipsum nulla qui quidem quis sed, voluptas!',
      bg: 'dark-content',
      image: '',
      shown: true
    }
  ]
  constructor() {

  }

  getArticles() {
    return this.articles;
  }
}
