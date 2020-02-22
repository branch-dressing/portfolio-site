import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from '../store';
import { JoelGame } from './JoelGame';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('returns some jsx', () => {
    expect(App()).toEqual((<JoelGame />));
  });
});
  