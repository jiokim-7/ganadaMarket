import { ComponentStory } from '@storybook/react';
import MyHome from './MyHome';

export default {
  component: MyHome,
  title: 'organisms/My/MyHome',
};

const Template: ComponentStory<typeof MyHome> = (args) => <MyHome {...args} />;

export const Default = Template.bind({
  user: {
    userEmail: 'zxc123@naver.com',
    userNickname: 'zxc123',
    userPhone: '01033334444',
    profileImageUrl: 'https://kream.co.kr/_nuxt/img/blank_profile.4347742.png',
    grade: 'μΌλ° νμ',
    orderHistory: [],
    salesHistory: [],
  },
});

Default.args = {};
