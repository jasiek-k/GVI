import React from "react";
import { FormattedMessage } from "react-intl";

import GenerativeLogo from "../../components/generativeLogo/GenerativeLogo.component";

import "./GenerativeSection.styles.scss";

const GenerativeSection = React.forwardRef(({ data: { roadsData, artwork } }, ref) => {

  let text = '';
  console.log(artwork)
  return (
    <div ref={ref} className="generative-section">
      <div className="generative-section__header">
        <p className="generative-section__header--caption">
          <FormattedMessage id="navbar:generativity" />
        </p>
      </div>
      <div className="generative-section__container">
        <div  className="generative-section__container__box">
          <div className="generative-section__container__box--logo">
            <GenerativeLogo roadsData={roadsData} reverseColors={true} />
          </div>
          <div className="generative-section__container__box--info">
          {//TO DO - wydzielic komponent i dodac obsluge tlumaczen
          Object.keys(artwork).map((item, index) => {
            if (item === 'techniques') text = artwork[item].join(', ');
            else if (item === 'size') text = `${artwork[item].join(' x ')} cm`;
            else text = artwork[item];

            return (
            <div className="generative-section__container__box--info--item" key={index}>
              <p className="generative-section__container__box--info--item__title">{item}</p>
              <p className="generative-section__container__box--info--item__text">{text}</p>
            </div>
          )}
          )}
          </div>
        </div>
       
        <div className="generative-section__container__content">
          <p className="generative-section__container__content--intro"></p>
          <p className="generative-section__container__content--quote"></p>
          <p className="generative-section__container__content--text"></p>

        </div>
      </div>
    </div>
  );
});

export default GenerativeSection;
