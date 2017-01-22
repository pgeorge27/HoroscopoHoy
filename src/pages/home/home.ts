import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { HoroscopoService } from '../../providers/horoscopo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HoroscopoService]
})
export class HomePage {
  movies: Array<any>;
    
  constructor(private navController: NavController, private horoscopoService: HoroscopoService) {
    this.searchMovieDB();
  }
  
	searchMovieDB() {
		/*if(event.target.value.length > 2) {
			this.horoscopoService.searchMovies(event.target.value).subscribe(*/
      this.horoscopoService.searchMovies().subscribe(
				data => {
					this.movies = data.results; 
					this.filtrar(this.movies);
					//console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			);
      /*}*/
	} 
  
	itemTapped(event, movie) {
		console.log(movie);  
		this.navController.push(DetailPage, {
			movie: movie
		});
	}

	filtrar(signos){
		for (var index = 0; index < signos.length; index++) {
			signos[index].img_image = this.normalize(signos[index].paneltitle_value_2.toLowerCase());
			console.log(signos[index]);
			//console.log(signos[index].img_image);
		}
	}

	normalize = (function() {
		var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
				to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
				mapping = {};
	
		for(var i = 0, j = from.length; i < j; i++ )
				mapping[ from.charAt( i ) ] = to.charAt( i );
	
		return function( str ) {
				var ret = [];
				for( var i = 0, j = str.length; i < j; i++ ) {
						var c = str.charAt( i );
						if( mapping.hasOwnProperty( str.charAt( i ) ) )
								ret.push( mapping[ c ] );
						else
								ret.push( c );
				}      
				return ret.join( '' );
		}
	})();

}
