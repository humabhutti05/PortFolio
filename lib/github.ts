interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

export async function getGitHubStats(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    const data = await res.json();
    
    // Fetch repos to count stars/forks
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await reposRes.json();
    
    let stars = 0;
    let forks = 0;
    if (Array.isArray(repos)) {
      stars = (repos as GitHubRepo[]).reduce((acc: number, repo: GitHubRepo) => acc + repo.stargazers_count, 0);
      forks = (repos as GitHubRepo[]).reduce((acc: number, repo: GitHubRepo) => acc + repo.forks_count, 0);
    }

    return {
      public_repos: data.public_repos || 0,
      followers: data.followers || 0,
      stars: stars,
      forks: forks
    };
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return null;
  }
}
