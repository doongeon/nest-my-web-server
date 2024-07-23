import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  private games = [
    {
      id: 2,
      description:
        '스페이스: 벽돌 떨어뜨리기, 방향키: 벽돌 이동, 위쪽 방향키: 벽돌 회전',
      gitRepo: 'https://github.com/doongeon/javascript-tetris',
      thumbnail:
        'https://react-javascript-playground.s3.ap-northeast-2.amazonaws.com/thumbnail/js-tetris.png',
    },
    {
      id: 1,
      description: '스페이스: 공 쏘기, 방향키: 패들 이동',
      gitRepo: 'https://github.com/doongeon/javascript-game-break-out',
      thumbnail:
        'https://react-javascript-playground.s3.ap-northeast-2.amazonaws.com/thumbnail/js-break-out.png',
    },
    {
      id: 3,
      description: '방향키: 이동, A: 공격, D: 점프',
      gitRepo: 'https://github.com/doongeon/c-game-tutorial',
      thumbnail:
        'https://react-javascript-playground.s3.ap-northeast-2.amazonaws.com/thumbnail/c-animation.png',
    },
  ];

  findAllGames() {
    return this.games;
  }

  findOne(id: number) {
    const user = this.games.find((game) => game.id === id);

    return user;
  }
}
