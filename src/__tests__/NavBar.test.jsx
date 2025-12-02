import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('wraps content in a div with "navbar" class', () => {
  const { container } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(container.querySelector('.navbar')).toBeInTheDocument();
});

test('renders a Home <NavLink>', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const a = screen.getByText(/home/i);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe('A');
  expect(a.href).toContain('/');
});

test('renders a Actors <NavLink>', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const a = screen.getByText(/actors/i);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe('A');
  expect(a.href).toContain('/');
});

test('renders a Directors <NavLink>', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const a = screen.getByText(/directors/i);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe('A');
  expect(a.href).toContain('/');
});
