import React from 'react';
import FeaturesList from './FeaturesList'


function MainForm(props) {
    
        return(
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
              <FeaturesList
                  features={props.features}
                  handleUpdate={props.handleUpdate}
                  selected={props.selected}
              />
          </section>
          )
 
}

export default MainForm;


