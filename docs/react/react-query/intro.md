---
title: Introduction to react-query
sidebar_position: 1
slug: /category/react-query
---

# What is react-query?

React Query is a library for handling fetching data.
What sounds so easy, can often be a struggle when doing it with plain React.
Even though, using the fetch()-API or libraries like Axios, there is a lot more of tasks that come along with
sending HTTP requests. React Query tries to solve most of them and is full of innovation.

React Query is capable of a couple important things:

-  Fetching data
-  Caching fetched data
-  Fetching data in the background
-  Lazy loading data
-  Merging multiple requests for the same data into one
-  Providing information on if and when data is loading

## Code example in React Query

This code example can be found in the [official documentation](https://tanstack.com/query/v4/docs/overview)

```tsx
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Example />
		</QueryClientProvider>
	)
}

function Example() {
	const { isLoading, error, data } = useQuery(['repoData'], () =>
		fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
			(res) => res.json()
		)
	)

	if (isLoading) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{' '}
			<strong>✨ {data.stargazers_count}</strong>{' '}
			<strong>🍴 {data.forks_count}</strong>
		</div>
	)
}
```

## Additional Resources

-  [Official Documentation](https://tanstack.com/)
