import { Table, Tag, Radio, Space } from 'antd';

const columns = [
    {
        title: '단계',
        dataIndex: 'status',
        key: 'status',
        render: (status:number) => (
            <span>
                {status === 1 ?
                    <Tag color={'blue'}>모집중</Tag>
                    : <Tag color={'green'}>모집예정</Tag>
                }
            </span>
        ),
    },
    {
        title: '지역',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: '주택구분',
        dataIndex: 'division',
        key: 'division',
    },
    {
        title: '분양/임대',
        dataIndex: 'parcel',
        key: 'parcel',
    },
    {
        title: '주택명',
        dataIndex: 'houseName',
        key: 'houseName',
    },
    {
        title: '모집공고일',
        dataIndex: 'announcement',
        key: 'announcement',
    },
    {
        title: '청약기간',
        dataIndex: 'period',
        key: 'period',
    },
];

const MainTable = ({ data }: any) => {
    return (
        <div>
            <Table
                columns={columns}
                pagination={false}
                dataSource={data}
            />
        </div>
    );
}
export default MainTable;