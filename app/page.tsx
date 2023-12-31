import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col gap-4 py-20 md:py-20">
			<div className="inline-block justify-start pt-33">
				{/* <h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1> */}
				<h1 className="text-[7vh] md:text-[10vh] lg:text-[15vh]" >
				HUMBLE ETH STAKING
				</h1>
				<br></br>
				<h1 className={title()}>
				ETHEREUM PUBLIC GOODS FUNDING VIA STAKING REWARDS REDISTRIBUTION
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
				In order to increase decentralization within the Ethereum network, we need to MAXIMIZE the usage of GMDPs,
				</h2>
				<h2 className={subtitle({ class: "mt-1" })}>
				or governance minimized, decentralized protocols, that issue decentralized, uncensorable stablecoins
				</h2>
			</div>

			{/* <div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div> */}

			{/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
	);
}
