

const NavBar = () => {
  return (
    <div>
        <div class="navbar bg-base-100 max-w-7xl mx-auto md:w-auto">
            <div class="navbar-start">
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>

            </ul>
            </div>
            <a class="btn btn-ghost text-xl">Recipe Calories</a>
            </div>
            <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
            </ul>
            </div>
            <div class="navbar-end gap-2">

            <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto h-8" />
            </div>
            <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>


            </div>

            </div>
        </div>

        





    </div>
  );
};

export default NavBar;