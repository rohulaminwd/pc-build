import Link from 'next/link';
import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse, theme } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import BuilderChoose from './BuilderChoose';

const getItems = (panelStyle) => [
    {
        key: '1',
        label: 'PROCESSOR',
        children: <Link href="/category/Processor" className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'MOTHERBOARD',
        children: <Link href="/category/Motherboard" className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '3',
        label: 'POWER SUPPLY',
        children: <Link
            href={"/category/PowerSupply"}
            className="mr-5 hover:text-gray-900"
        >
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '4',
        label: 'STORAGE DEVICE',
        children: <Link href={"/category/Storage"} className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },
    {
        key: '5',
        label: 'MONITOR',
        children: <Link href={"/category/Monitors"} className="mr-5 hover:text-gray-900">
            <Button className='bg-blue-600 text-white font-semibold' icon={< PlusCircleOutlined />}>Choose</Button>
        </Link>,
        style: panelStyle,
    },

];

const pcBuilder = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 36,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'circle',
    };
    return (

        <div>
            <div>
                <h1 className='text-2xl font-extrabold text-center mt-12'>BUILD YOU OWN PC</h1>
            </div>
            <div className='flex justify-between'>

                <div className='m-12 mb-6'>

                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,

                        }}
                        items={getItems(panelStyle)}
                    />
                </div>
                <div className='mr-7 p-8'>
                    <BuilderChoose />

                </div>
            </div>

        </div>
    );
};

export default pcBuilder;
