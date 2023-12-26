"use client";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";


import { Navibar } from '@/components/component/navibar';
import React, { useState } from 'react';
import BookDetailComponent from '@/components/component/bookdetailcomponent'; // 상세 정보 컴포넌트 임포트
import Forum from '@/components/component/forum';
import Booklist from '@/components/component/booklist';


export default function Mainpage({ }) {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [SelecteCompoId, setSelecteCompoId] = useState<number | null>(0);
  const showBookDetails = (bookId) => {
    setSelectedBookId(bookId);
  };

  const renderContent = () => {
    switch (SelecteCompoId) {
      case 1:
        return <Booklist setSelecteCompoId={setSelecteCompoId} />;
      case 2:
        return <BookDetailComponent bookId={selectedBookId} setSelectedBookId={setSelectedBookId} setSelecteCompoId={setSelecteCompoId} />;
      case 3:
        return <Forum setSelecteCompoId={setSelecteCompoId} />;
      case 4:
        return <Booklist setSelecteCompoId={setSelecteCompoId} />;
      default:
        return <Booklist setSelecteCompoId={setSelecteCompoId} />;
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-[#FF4F6]">
      <Navibar setSelecteCompoId={setSelecteCompoId} />
      <main className="p-4">
        <div>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}



// 북리스트 가져오기 위한 인터페이스

// interface BookListComponentProps {
//   bookId: number;
//   infoType: 'book_name' | 'author'; // 여기에 필요한 다른 정보 타입을 추가할 수 있습니다.
// }

// function BookListComponent({ bookId, infoType }: BookListComponentProps) {
//   const { bookList, isLoading, isError } = useBookList();

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading data</div>;

//   // 특정 ID의 책 찾기
//   const book = bookList.find(book => book.id === bookId);

//   // 원하는 정보 반환
//   return (
//     <div>
//       {book ? (
//         <p>{book[infoType]}</p> // infoType에 따라 다른 정보 표시
//       ) : (
//         <p>책을 찾을 수 없습니다.</p>
//       )}
//     </div>
//   );
// }






// const Logmain = () => {
//   const router = useRouter();

//   const handleLogout = () => {
//     // 로컬 스토리지에서 토큰 제거
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('refresh_token');

//     // 로그인 페이지로 리디렉트
//     router.push('@/app/page');
//   };

//   return (
//     <div>
//       <h1>Main Page</h1>
//       {/* 로그아웃 버튼 */}
//       <button onClick={handleLogout}>로그아웃</button>
//     </div>
//   );
// };
