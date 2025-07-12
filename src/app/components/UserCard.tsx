import React from "react";
import Link from "next/link";
import { User } from "../services/profiles";
import Card from "./Card";
import { typography, interactive } from "../utils/styles";

interface UserCardProps {
  user: User;
  className?: string;
}

export default function UserCard({ user, className }: UserCardProps) {
  return (
    <Link href={`/dashboard/users/${user.id}`} className='block'>
      <Card
        title={user.name}
        className={`${className} ${interactive.hoverCard}`}
      >
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <span className={typography.label}>Email:</span>
            <span className={typography.smallWhite}>{user.email}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className={typography.label}>Phone:</span>
            <span className={typography.smallWhite}>{user.phone}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
