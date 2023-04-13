import { render,screen,fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import Modal from './Modal'
test('renders learn react link', () => {
   render(<Modal />);
  const newlink = screen.getByTestId('count').textContent
  expect(newlink).toEqual("FrontEnd Developer");
  // expect(newlink).toEqual('yter');

});
test('btnclick should change to true when click', () => { 

   render(<Dashboard />);
 const btn  = screen.getByDisplayValue('Get Started')
 })