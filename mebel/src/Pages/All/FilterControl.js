import { Button, Select } from "antd";

function FilterControl() {
  // ///select
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  // ///select
  // card select
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  // card select
  return (
    <div className="malumotheader">
      <h1 className="selecttext">Viloyat tanlang !</h1>
      <Select
        showSearch
        placeholder="Viloyat tanlang !"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "Namangan",
            label: "Namangan",
          },
          {
            value: "Toshkent",
            label: "Toshkent",
          },
          {
            value: "Buxoro",
            label: "Buxoro",
          },
        ]}
      />
      <h1 className="selecttext">Mavjud Tumanlar</h1>
      <div className="selectBody">
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
        <Button>Minbuloq 1100+</Button>
      </div>
    </div>
  );
}
export default FilterControl;
