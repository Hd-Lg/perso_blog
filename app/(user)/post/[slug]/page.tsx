import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../utils/sanity.client";
import urlFor from "../../../../utils/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../../../components";

type Props = {
	params: {
		slug: string;
	};
};

const Post = async ({ params: { slug } }: Props) => {
	const query = groq`
        *[_type=='post' && slug.current==$slug][0] {
            ...,
            author->,
            categories[]->
        }
    `;
	const post: Post = await client.fetch(query, { slug });
	return (
		<article className='px-10 pb-28'>
			<section className='space-y-2 border border-slate-400 text-white'>
				<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
					<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
						<Image
							src={urlFor(post.mainImage).url()}
							alt={post.author.name}
							fill
							className='object-cover object-center mx-auto'
						/>
					</div>
					<section className='p-5 bg-slate-600 w-full'>
						<div className='flex flex-col md:flex-row justify-between gap-y-5'>
							<div>
								<h1 className='text-4xl font-extrabold'>{post.title}</h1>
								<p>
									{new Date(post._createdAt).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}
								</p>
							</div>
							<div className='flex items-center space-x-2'>
								<Image
									src={post?.author?.image?.asset?._ref}
									alt={post.author.name}
									height={40}
									width={40}
								/>
								<div>
									<h3 className='font-bold text-lg'>{post.author.name}</h3>
									<div>{/* Author BIO */}</div>
								</div>
							</div>
						</div>
						<div>
							<h2 className='italic pt-10s'>{post.description}</h2>
							<div className='flex items-center justify-end mt-auto space-x-2'>
								{post.categories.map((category) => (
									<p
										key={category._id}
										className='bg-slate-300 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
									>
										{category.title}
									</p>
								))}
							</div>
						</div>
					</section>
				</div>
			</section>
			<PortableText
				value={post.body}
				components={RichTextComponent}
				onMissingComponent={false}
			/>
		</article>
	);
};

export default Post;
