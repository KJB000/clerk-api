import React from 'react'
import { FaCodeBranch, FaStar, FaEye } from 'react-icons/fa'
import Link from 'next/link'

const username = 'KJB000'

export default async function Repospage() {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()

  console.log(repos)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">
        Github repositories of {username}
      </h2>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold text-black">{repo.name}</h3>
              <p className="text-gray-800">{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-black">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 text-black">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1 text-black">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
