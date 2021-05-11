import { Table, Tag, Button } from 'antd';
import Link from 'next/link';

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

interface tableProps {
    data: any
}
const MainTable:React.FC<tableProps> = ({ data }: any) => {
    return (
        <div>
            <Table
                columns={columns}
                pagination={false}
                dataSource={data}
            />
            <Button 
                block
            > 
                <Link href={"/detail"}>더 보기</Link> 
            </Button>
        </div>
    );
}
export default MainTable;