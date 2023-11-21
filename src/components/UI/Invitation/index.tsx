import { NavLink } from 'react-router-dom';
import s from './Invitation.module.scss';
import { PropsWithChildren } from 'react';

interface InvitationProps extends PropsWithChildren {
  path: string;
  text?: string;
}

const Invitation: React.FC<InvitationProps> = ({ text, path, children }) => (
  <>
    <div>{text}
      <NavLink
        className={s.inviteLink}
        to={path}
      >
        {children}
      </NavLink>
    </div>
  </>
);

export default Invitation;