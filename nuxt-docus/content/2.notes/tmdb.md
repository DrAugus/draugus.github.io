---  
title: TMDB
date: 2022-10-20 11:42:00
icon: simple-icons:themoviedatabase
category:

- 编程

tag:

- API
- TMDB
- movie

---

# The Movie Database

first, get API.

- search: `https://api.themoviedb.org/3/search/movie?query=Marvel&api_key=<yourkey>&page=5`
- image: `https://image.tmdb.org/t/p/w500/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg`
  - ori: `https://image.tmdb.org/t/p/original/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg`
  - w500: above
  - [refer](https://developers.themoviedb.org/3/getting-started/images)
- by id: `https://api.themoviedb.org/3/movie/157336?api_key=<yourkey>`

query 没有 keyword 厉害

根据 API 文档 ，[TMDB api]

1. get `/search/keyword` [refer][api-search-keyword]
    `https://api.themoviedb.org/3/search/keyword?query=marvel-cinematic-universe-mcu&api_key=yourkey`  
    response id, name => 180547
2. get `/keyword/{keyword_id}/movies` [refer][api-get-movie-by-key]
    `https://api.themoviedb.org/3/keyword/180547/movies?api_key=yourkey`

blog 里的 json movie 部分即是 这个 keyword 查询出来的

tv 仍然是 query 出来的

[TMDB api]: https://developers.themoviedb.org/3/
[api-search-keyword]: https://developers.themoviedb.org/3/search/search-keywords
[api-get-movie-by-key]: https://developers.themoviedb.org/3/keywords/get-movies-by-keyword
