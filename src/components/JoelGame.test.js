import React from 'react';
import { shallow } from 'enzyme';
import { JoelGame } from './JoelGame';
import { Provider } from 'react-redux';
import store from '../store';

describe('JoelGame component', () => {
  it('renders JoelGame', () => {
    const wrapper = shallow(<Provider store={store}><JoelGame /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('returns some jsx', () => {
    expect(JoelGame()).toEqual((
      <section>
        <button>Feed</button>
        <button>Coffee</button>
        <button>Give Book</button>
        <button>High Five</button>
      </section>
    ));
  });
});
