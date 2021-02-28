import React from 'react';
import { FormattedMessage } from 'react-intl';

import './ArtworksData.styles.scss';

const ArtworksData = ({ artwork}) => (
    <div className="artwork-data__container"> 
    {  
      Object.keys(artwork).map((item, index) => {
        let text = '';
        if (item === 'materials') text = artwork[item].join(', ');
        else if (item === 'size') text = `${artwork[item].join(' x ')} cm`;
        else text = artwork[item];

         return ( 
          <div className="artwork-data__container--item" key={index}>
            <p className="artwork-data__container--item__title" >
              <FormattedMessage id={`artwork:${item}`} />
            </p> 
            <p className="artwork-data__container--item__text">{text}</p> 
          </div>
          )
        })
      } 
    </div>
)

export default ArtworksData;
