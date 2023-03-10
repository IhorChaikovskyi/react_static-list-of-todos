// Add the required types and props

import { User } from '../../types/User';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user === null ? '#' : user.email}`}>
    {user === null ? undefined : user.name}
  </a>
);
