import React, {useState} from 'react';
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {

    const [scrollX, setScrollX] = useState(-400)

    const handleBeforArrow = () => {
        let scrollXValue = scrollX + Math.round(window.innerWidth /2 )
        if (scrollXValue > 0 ) {
            scrollXValue = 0
        }
        setScrollX(scrollXValue)
    }


    const handleNextArrow = () => {
        let scrollXValue = scrollX - Math.round(window.innerWidth /2 )
        let listWidth = items.results.length * 225
        if((window.innerWidth - listWidth) > scrollXValue) {
            scrollXValue = (window.innerWidth - listWidth) - 60
        }
        setScrollX(scrollXValue)
    }




    return (
        <div className="movieRow">
            <h1>{title}</h1>

            <div className="movieRow-before" onClick={handleBeforArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow-next" onClick={handleNextArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow-listArea">
                <div className="movieRow-list" style={{ 
                    marginLeft: scrollX,
                    width: items.results.length * 225
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default MovieRow
