import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovellaService {

  constructor(private http:HttpClient) { }
  //getupcoming
  getupcoming(){
    return this.http.get<any>("https://api.themoviedb.org/3/movie/upcoming?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&page=1")
  }
  //get trending
  gettrendingmovies() {
    return  this.http.get<any>("https://api.themoviedb.org/3/discover/movie?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
  }
  //get popular
  getpopularmovies(){
    return this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&page=1")
  }
  //search movies
  getsearchmovies(movie:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&page=1&include_adult=false&query=${movie}`)
  }
  // get lastest
  getlastestmovies():any{
    return this.http.get<any>("https://api.themoviedb.org/3/movie/now_playing?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&page=1")
  }
  getnextmovie(movie:any){
    return  this.http.get<any>("https://api.themoviedb.org/3/discover/movie?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+movie);
  }

  // get Tv series
 gettvmovie(){
   return this.http.get<any>("https://api.themoviedb.org/3/tv/airing_today?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&page=1")
 }

//get videos and videos detail

  getvideos(id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US`)
  }
  getvideodetail(id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US`)
  }

  //get persons and people
  getpeople(){
    return this.http.get<any>("https://api.themoviedb.org/3/person/popular?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&page=1")
  }
}
