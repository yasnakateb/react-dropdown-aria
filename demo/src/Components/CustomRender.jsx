import React from 'react';
import Dropdown, { StyleKeys } from '../../../lib';
import '../styles/CustomRender.scss';
import ExampleSection from './ExampleSection';

const options = [
  { value: 'Custom' },
  { value: 'Render' },
  { value: 'Function' },
  { value: 'Example' },
];

const customStyle = {
  optionItem: (base, state, { index }) => ({
    ...base,
    'text-align': index % 2 === 0 ? 'left' : 'right',
  }),
};

class CustomRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: null,
    };
  }

  setInterest = (selectedOption) => {
    this.setState({ interest: selectedOption });
  }

  renderOption = (props, optionRef, getStyle) => {
    const { onOptionClicked, option } = props;
    const { selectedOption } = this.state;
    const classNames = getStyle(StyleKeys.OptionItem, { selected: option.value === selectedOption });

    return (
      <button
        // Including the ref here is important, otherwise we wont be able to
        // focuse the elements in the list when using keyboard nav
        ref={optionRef}
        aria-label={option.ariaLabel}
        className={classNames}
        onClick={onOptionClicked}
        onKeyDown={onOptionClicked}
        tabIndex="-1"
        title={option.title}
        type="button"
        key={option.value}
      >
        { option.value }
      </button>
    );
  }

  render() {
    const { interest } = this.state;

    return (
      <ExampleSection title="Custom Option Render Function" fileName="CustomRender.jsx">
        {(dropdownState) => (
          <Dropdown
            buttonClassName="my-dropdown"
            id="dropdown"
            ariaLabel="Custom Option Rendering Dropdown"
            options={options}
            optionItemRenderer={this.renderOption}
            selectedOption={interest}
            setSelected={this.setInterest}
            width={400}
            style={customStyle}
            {...dropdownState}
          />
        )}
      </ExampleSection>
    );
  }
}

export default CustomRender;
