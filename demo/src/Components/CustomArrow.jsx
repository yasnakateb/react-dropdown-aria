import React from 'react';
import ExampleSection from './ExampleSection';
import Dropdown from '../../../lib';
import '../styles/CustomArrow.scss';

const options = [
  { value: 'Custom' },
  { value: 'Arrow' },
  { value: 'Render' },
  { value: 'Function' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '10' },
];

class CustomArrow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
    };
  }

  setInterest = (selectedOption) => {
    this.setState({ interest: selectedOption });
  }

  customArrowRenderer = (open) => {
    const arrowClass = open ? 'far fa-smile custom-arrow' : 'far fa-frown custom-arrow';
    return <i className={arrowClass} />;
  }

  render() {
    const { interest } = this.state;

    return (
      <ExampleSection title="Custom Arrow Render Function" fileName="CustomArrow.jsx">
        {(dropdownState) => (
          <Dropdown
            buttonClassName="my-dropdown"
            id="dropdown"
            ariaLabel="Custom Arrow Dropdown"
            arrowRenderer={this.customArrowRenderer}
            options={options}
            selectedOption={interest}
            setSelected={this.setInterest}
            width={400}
            maxContentHeight={150}
            {...dropdownState}
          />
        )}
      </ExampleSection>
    );
  }
}

export default CustomArrow;
