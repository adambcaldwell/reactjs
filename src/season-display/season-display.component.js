import './season-display.css';
import React from 'react';

/**
 * @description Object to clean up the functional component code
 * @type {{winter: {iconName: string, text: string}, summer: {iconName: string, text: string}}}
 */
const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun',
  },
  winter: {
    text: "Burr it's chilly!",
    iconName: 'snowflake',
  },
};

/**
 * @method getSeason
 * @param {Number} lat    - latitude
 * @param {Number} month  - month
 * @returns {string}      - winter|summer
 */
const getSeason = (lat, month) => {
  if (2 < month && 9 > month) return 0 < lat ? 'summer' : 'winter';

  return 0 < lat ? 'winter' : 'summer';
};

/**
 * @component functional
 * @name SeasonDisplay
 * @description
 * @param {Object} props      - properties of season display
 * @param {Number} props.lat  - latitude
 */
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
