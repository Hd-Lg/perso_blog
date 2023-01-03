import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../utils/sanity.client";
import { PreviewSuspense, PreviewBlogList, BlogList } from "../../components/";

const query = groq`
	*[_type=='post'] {
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function Home() {
	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div role='status'>
						<p className='text-center text-lg animate-pulse'>
							Loading Preview Data
						</p>
					</div>
				}
			>
				<PreviewBlogList query={query} />
			</PreviewSuspense>
		);
	}

	const posts = await client.fetch(query);
	return <BlogList posts={posts} />;
}
