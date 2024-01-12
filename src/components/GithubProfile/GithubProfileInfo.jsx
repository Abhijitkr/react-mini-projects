export default function GithubProfileInfo({ user }) {
  const {
    avatar_url,
    name,
    login,
    html_url,
    bio,
    followers,
    public_repos,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="github-profile-info">
      <div className="github-avatar">
        <img src={avatar_url} alt={name || login} />
        <p>{name || login}</p>
      </div>
      <div className="github-info">
        <a href={html_url}>{name || login}</a>
        <p>{bio}</p>
        <p>Followers: {followers}</p>
        <p>Public Repositories: {public_repos}</p>
        <p>
          Created at:{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
    </div>
  );
}
