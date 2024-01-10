import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const NavBar = () => {
  return (
    <Navbar fluid rounded className='my-2'>
      <Navbar.Brand href="https://flowbite-react.com">
        <h1 className="text-orange-500 text-2xl font-bold">MEGA.NEWS</h1> {/* Increased font size and added font-bold */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-base font-medium">Bonnie Green</span> {/* Increased font size */}
            <span className="block truncate text-base font-medium">name@flowbite.com</span> {/* Increased font size */}
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link> */}
        <Navbar.Link href="#" className="text-base">Categories</Navbar.Link> {/* Increased font size */}
        <Navbar.Link href="#" className="text-base">Pages</Navbar.Link> {/* Increased font size */}
        <Navbar.Link href="#" className="text-base">Contact Us</Navbar.Link> {/* Increased font size */}
        <Navbar.Link href="#" className="text-base">About Us</Navbar.Link> {/* Increased font size */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
