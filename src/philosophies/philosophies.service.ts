import { Injectable } from '@nestjs/common';

@Injectable()
export default class PhilosophiesService {
    private philosophies = [
        {
            id: 1,
            url: 'https://wallpapers.com/images/high/van-gogh-self-portrait-3dn06h1vqnmkw1if.webp',
        },
        {
            id: 2,
            url: 'https://wallpapers.com/images/high/soft-and-fuzzy-balls-on-samsung-full-hd-807ed4i602bopbsz.webp',
        },
        {
            id: 3,
            url: 'https://wallpapers.com/images/high/butterfly-made-of-dust-samsung-full-hd-rqybb2746byu7tfn.webp',
        },
        {
            id: 4,
            url: 'https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails-768x768.jpg',
        },
        {
            id: 5,
            url: 'https://wallpapers.com/images/high/samsung-background-z3h7qg2rltts8umz.webp',
        },
        {
            id: 6,
            url: 'https://wallpapers.com/images/high/samsung-background-6d98mdwqoecxv0et.webp',
        },
        {
            id: 7,
            url: 'https://wallpapers.com/images/high/black-and-red-berries-samsung-full-hd-6qvady67l095dglg.webp',
        },
    ];

    findAll() {
        return this.philosophies;
    }

    findOne(id: number) {
        return this.philosophies.find((philosophie) => philosophie.id === id);
    }
}
