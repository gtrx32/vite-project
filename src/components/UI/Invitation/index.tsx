import { NavLink } from 'react-router-dom';
import s from './Invitation.module.scss';
import { PropsWithChildren } from 'react';

interface InvitationProps extends PropsWithChildren {
  className?: string;
  path: string;
  text?: string;
}

const Invitation: React.FC<InvitationProps> = ({ className, path, text, children }) => (
  <div className={className}>
    {text}
    <NavLink className={s.inviteLink} to={path}>
      {children}
    </NavLink>
  </div >
);

export default Invitation;