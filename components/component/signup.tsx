/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/o0kuhRYdsHK
 */
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Signup({ setShowSignup }) {
    return (
        <main key="1" className="p-6">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <Button
                        className="mb-2 text-xs"
                        variant="outline"
                        onClick={() => setShowSignup(false)}
                    >
                        <ArrowLeftIcon className="mr-2 h-4 w-4" />
                        뒤로가기
                    </Button>
                    <h2 className="text-2xl font-medium">회원가입 하기</h2>
                    <p className="text-gray-500">
                        회원가입 정보를 입력해 주세요
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">이름</Label>
                            <Input id="name" placeholder="홍길동" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ID">아이디</Label>
                            <Input
                                id="ID"
                                placeholder="johndoe@example.com"
                                required
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="PW">비밀번호</Label>
                            <Input
                                id="PW"
                                placeholder="비밀번호"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">전화번호</Label>
                            <Input
                                id="phone"
                                placeholder="010-1234-7890"
                                type="tel"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="job-title">직업</Label>
                            <Input id="job-title" placeholder="직업명" />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="profile">프로필 사진 올리기</Label>
                            <Input id="profile" type="file" />
                        </div>
                        <Button className="w-full" type="submit">
                            회원가입 하기
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}

function ArrowLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    );
}
