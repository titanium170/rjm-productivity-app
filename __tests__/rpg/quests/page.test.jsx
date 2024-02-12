import { render } from '@testing-library/react';
import Page from '@/app/rpg/quests/page';
 
describe('Quests page', () => {
  it('renders correctly', async () => {
    const { container } = render(await Page());
    expect(container).toMatchSnapshot();
  })
});