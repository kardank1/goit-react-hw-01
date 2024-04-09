import css from "./Profile.module.css"

export default function Profile({user: {username, tag, location, avatar, stats: {followers, views, likes}},}){
    return (
        <div className={css.profileCart}>
            <div className={css.userInfo}>
                <img
                className={css.userAvatar}
                src={avatar}
                alt="User avatar"
                />
                <p className={css.username}>{username}</p>
                <p className={css.secondaryUserInfo}>@{tag}</p>
                <p className={css.secondaryUserInfo}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li className={`${css.statsListItem} ${css.firstStatsListItem}`}>
                <span className={css.statsText}>Followers</span>
                <span className={css.statsInfo}>{followers}</span>
                </li>
                <li className={css.statsListItem}>
                <span className={css.statsText}>Views</span>
                <span className={css.statsInfo}>{views}</span>
                </li>
                <li className={css.statsListItem}>
                <span className={css.statsText}>Likes</span>
                <span className={css.statsInfo}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}