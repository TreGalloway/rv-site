const Hero = () => {
	return (
		<div className="relative w-full">
			<header>
				<nav className="fixed z-10 w-full bg-white border-b md:absolute md:bg-transparent">
					<div className="container px-2 m-auto md:px-12 lg:px-7">
						<div className="flex flex-wrap items-center justify-between gap-6 py-4 md:py-4 md:gap-0">
							<div className="flex justify-between w-full px-6 lg:w-max md:px-0">
								<a
									href="/"
									aria-label="logo"
									className="flex items-center space-x-2">
									<div aria-hidden="true" className="flex space-x-1">
										<div className="w-4 h-4 bg-gray-900 rounded-full"></div>
										<div className="w-2 h-6 bg-yellow-500"></div>
									</div>
									<span className="text-2xl font-bold text-gray-900">
										Arceelus
									</span>
								</a>

								<button
									aria-label="humburger"
									id="hamburger"
									className="relative w-10 h-10 -mr-2 lg:hidden">
									<div
										aria-hidden="true"
										id="line"
										className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
									<div
										aria-hidden="true"
										id="line2"
										className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
								</button>
							</div>

							<div className="flex-wrap items-center justify-end hidden w-full p-6 space-y-6 bg-white lg:flex rounded-xl md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
								<div className="text-gray-600 lg:pr-4">
									<ul className="space-y-6 text-sm font-medium tracking-wide md:flex md:space-y-0">
										<li>
											<a
												href="/"
												className="block transition md:px-4 hover:text-yellow-700">
												<span>Home</span>
											</a>
										</li>
										<li>
											<a
												href="/"
												className="block transition md:px-4 hover:text-yellow-700">
												<span>Portfolio</span>
											</a>
										</li>
										<li>
											<a
												href="/"
												className="block transition md:px-4 hover:text-yellow-700">
												<span>Services</span>
											</a>
										</li>
									</ul>
								</div>

								<div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
									<button
										type="button"
										title="Start buying"
										className="w-full px-6 py-3 text-center transition rounded-full active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
										<span className="block text-sm font-semibold text-yellow-800">
											Sign up
										</span>
									</button>
									<button
										type="button"
										title="Start buying"
										className="w-full px-6 py-3 text-center transition bg-yellow-300 rounded-full hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
										<span className="block text-sm font-semibold text-yellow-900">
											Contact Us
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<div>
				<img
					className="absolute w-full object-cover object-top h-[90vh] inset-0 top-[4.68rem]"
					src="images/bg2.webp"
					alt=""
					loading="lazy"
				/>
				<div className="container relative px-6 m-auto border-l border-r md:px-12 lg:px-7">
					<div className="py-40 ml-auto lg:py-56 md:w-9/12 lg:w-7/12">
						<h1 className="text-4xl font-bold text-gray-900 md:text-6xl lg:text-4xl xl:text-6xl">
							Shaping a world with an endless{' '}
							<span className="text-yellow-600">imagination.</span>
						</h1>
						<p className="mt-8 text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
							nam itaque sed eius modi error totam sit illum. Voluptas doloribus
							asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
						</p>
						<div className="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
							<button
								type="button"
								title="Start buying"
								className="w-full px-6 py-3 text-center transition border border-gray-200 rounded-full active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
								<span className="block text-sm font-semibold text-yellow-800">
									About us
								</span>
							</button>
							<button
								type="button"
								title="Start buying"
								className="w-full px-6 py-3 text-center transition bg-yellow-300 rounded-full hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
								<span className="block text-sm font-semibold text-yellow-900">
									Contact Us
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
