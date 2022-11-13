import Link from "next/link";
import React from "react";
import MainLayout from "../../components/constants/MainLayout";
import Footer from "../../components/Landing/Footer";
import Google from "../../components/svg/Google";

const Login = () => {
	return (
		<MainLayout title="Taskero - Login">
			<div className="w-full flex flex-col relative min-h-screen">
				<div className="flex w-full p-5 border-b-2 sticky top-0 bg-white">
					<Link href="/">
						<img className="ltab:w-[90px] w-[100px] cursor-pointer" src="/logoq.png" alt="" />
					</Link>
				</div>
				<div className="flex w-full items-center justify-center py-8">
					<form className="flex max-w-[500px] phone:w-1/2 w-11/12 p-7 flex-col bg-slate-50 shadow border-[1px] border-[#058179]/20">
						<img className="w-[140px] mx-auto" src="/logoq.png" alt="" />
						<h1 className="text-xl font-bold text-center text-[#058179] mt-6">
							Welcome Back!
						</h1>
						<div className="flex flex-col w-full mt-5">
							<label htmlFor="email">Email</label>
							<input
								className="border-2 border-slate-200 rounded-md outline-none focus:border-[#058179] duration-500 p-2 mt-2"
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="flex flex-col w-full mt-5">
							<label htmlFor="password">Password</label>
							<input
								className="border-2 border-slate-200 rounded-md outline-none focus:border-[#058179] duration-500 p-2 mt-2"
								type="password"
								name="password"
								id="password"
								required
							/>
						</div>
						<button className="bg-[#058179] text-white rounded-md p-2 mt-11">
							Login
						</button>
						<h2 className="text-center  my-2">Or</h2>
						<div className="flex justify-center">
							<div className="rounded-md  mt-5 mr-2 flex items-center bg-white pr-3 border-2 hover:shadow cursor-pointer">
								<Google />
								<span>Sign in with Google</span>
							</div>
						</div>
						<div className="flex w-full items-center justify-between mt-5">
							<span>Don't have an account? </span>
							<Link href="/auth/signup">
								<a className="text-[#058179] underline">Signup</a>
							</Link>
						</div>
					</form>
				</div>
				<Footer />
			</div>
		</MainLayout>
	);
};

export default Login;
