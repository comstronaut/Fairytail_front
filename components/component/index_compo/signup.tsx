/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/o0kuhRYdsHK
 */
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from 'axios';
import router from 'next/router';
import Modal from '@/components/component/index_compo/modal';
import './modal.css';
import termsContent from './termsContent';
import privacyContent from './privacyContent';


interface CheckboxExampleProps {
    isChecked: boolean;
    toggleCheckbox: () => void;
}

// 개인정보 및 이용약관 체크박스
function CheckboxExample({ isChecked, toggleCheckbox, label }) {
    return (
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span>{isChecked ? `${label} 동의(확인완료)` : `${label} 동의(확인)`}</span>
      </div>
    );
}

export function Signup({ setShowSignup }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMessage, setErrorMessage] = useState("");   // 에러 메시지 상태 추가
    const [isChecked, setIsChecked] = useState(false);      // 개인정보 동의 체크박스
    const [isCheckedTerms, setIsCheckedTerms] = useState(false);    // 이용약관 동의 체크박스
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(""); // 모달 내용을 담을 상태 추가
    const [contentType, setContentType] = useState("");
    const [modalCheckboxChecked, setModalCheckboxChecked] = useState(false); // 모달 내 체크박스 상태를 관리하는 상태 추가

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const toggleCheckbox = (type) => {
        if (type === 'terms') {
            setIsCheckedTerms(!isCheckedTerms);
        } else {
            setIsChecked(!isChecked);
        }
    };

    const handleModalCheckboxChange = () => {
        setModalCheckboxChecked(!modalCheckboxChecked);
        if (contentType === 'terms') {
          setIsCheckedTerms(!modalCheckboxChecked);
        } else {
          setIsChecked(!modalCheckboxChecked);
        }
    };

    const openTermsModal = () => {
        setModalContent(termsContent); // termsContent는 이용약관 내용을 담고 있는 변수
        setModalOpen(true);
        setContentType('terms');
        setModalCheckboxChecked(isCheckedTerms); // 모달 체크박스 상태 초기화
    };
    
      const openPrivacyModal = () => {
        setModalContent(privacyContent); // privacyContent는 개인정보 동의 내용을 담고 있는 변수
        setModalOpen(true);
        setContentType('privacy');
        setModalCheckboxChecked(isChecked); // 모달 체크박스 상태 초기화
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent("");
        setModalCheckboxChecked(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // 간단한 유효성 검사
        if (!isValidKoreanName(formData.name)) {
            setErrorMessage('이름은 한글로만 입력해주세요.');
            return;
        }

        if (formData.name.length < 2) {
            setErrorMessage('이름은 최소 2글자 이상이어야 합니다.');
            return;
        }
    
        if (!isValidEmail(formData.email)) {
            setErrorMessage('유효한 이메일 주소를 입력해주세요.');
            return;
        }
    
        // if (formData.password.length < 6) {
        //     setErrorMessage('비밀번호는 최소 6글자 이상이어야 합니다.');
        //     return;
        // }

        if (!validatePassword(formData.password)) {
            setErrorMessage('비밀번호는 8글자 이상이어야 하며, 영문, 숫자, 특수문자를 모두 포함해야 합니다.');
            return;
        }
    
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return;
        }

        setErrorMessage("");    // 에러 메시지 초기화
    
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/signup/`, formData);
            console.log("회원가입 성공:", response.data);
            setShowSignup(false);
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                console.error('회원가입 실패:', error.message);
                setErrorMessage("회원가입에 실패했습니다. 다시 시도해주세요.");   
            }
        }
    };
    
    // 이메일 유효성 검사 함수
    const isValidEmail = (email) => {
        // 간단한 이메일 형식 검사, 실제로는 더 강력한 검사 필요
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // 한글 이름 유효성 검사 함수
    const isValidKoreanName = (name) => {
        const koreanNameRegex = /^[가-힣]+$/;
        return koreanNameRegex.test(name);
    };

    const validatePassword = (password) => {
        return password.length >= 8 &&
               /[a-zA-Z]/.test(password) &&  // 영문자 포함
               /\d/.test(password) &&        // 숫자 포함
               /[!@#$%^&*]/.test(password);   // 특수문자 포함
    };


    return (
        <main key="1" className="p-6">
            <Card className="min-w-96 mx-auto">
                <CardHeader>
                    <Button
                        className="mb-2 text-xs"
                        variant="outline"
                        onClick={() => setShowSignup(false)}
                    >
                        <ArrowLeftIcon className="mr-2 h-4 w-4" />
                        뒤로가기
                    </Button>
                    <h2 className="text-xl font-medium">회원가입 하기</h2>
                    <p className="text-gray-500">
                        회원가입 정보를 입력해 주세요
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    {errorMessage && (
                        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2 flex justify-between items-center">
                            <Label htmlFor="name" className="font-medium lg:w-1/5">이름</Label>
                            <Input 
                                id="name" 
                                placeholder="홍길동" 
                                required 
                                value={formData.name}
                                onChange={handleChange}
                                className="font-medium lg:w-3/5"
                            />
                        </div>

                        <div className="space-y-2 flex justify-between items-center">
                            <Label htmlFor="ID" className="font-medium lg:w-1/5">아이디</Label>
                            <Input
                                id="email"
                                placeholder="johndoe@example.com"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="font-medium lg:w-3/5"
                            />
                        </div>
                        <div className="space-y-2 flex justify-between items-center">
                            <Label htmlFor="PW" className="font-medium lg:w-1/5">비밀번호</Label>
                            <Input
                                id="password"
                                placeholder="비밀번호"
                                required
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="font-medium lg:w-3/5"
                            />
                        </div>
                        <div className="space-y-2 flex justify-between items-center">
                            <Label htmlFor="PW_re" className="font-medium lg:w-1/5">비밀번호 확인</Label>
                            <Input
                                id="confirmPassword"
                                placeholder="비밀번호 확인"
                                required
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="font-medium lg:w-3/5"
                            />
                        </div>
                        <div>
                            <span>
                                이용약관에 대한 자세한 내용은{' '}
                                <button onClick={openTermsModal} className="text-sky-500">
                                    여기(서비스 이용약관)
                                </button>
                                를 확인하세요.
                            </span>
                        </div>
                        <div>
                        <span>
                            개인정보 수집/이용 동의에 대한 자세한 내용은{' '}
                            <button onClick={openPrivacyModal} className="text-sky-500">
                                여기(개인정보 처리방침)
                            </button>
                            를 확인하세요.
                            </span>
                        </div>
                        <CheckboxExample isChecked={isCheckedTerms} toggleCheckbox={() => toggleCheckbox('terms')} label="이용약관" />
                        <CheckboxExample isChecked={isChecked} toggleCheckbox={() => toggleCheckbox('privacy')} label="개인정보 수집/이용" />
                        {!(isChecked && isCheckedTerms) && (
                            <div className="text-red-500 text-sm mt-2">이용약관 및 개인정보 수집/이용 동의에 체크해주세요.</div>
                        )}
                        <Button className="w-full" type="submit" disabled={!isChecked || !isCheckedTerms}>
                            회원가입 하기
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                content={modalContent} 
                contentType={contentType} 
                parentCheckboxChecked={contentType === 'terms' ? isCheckedTerms : isChecked}
                handleParentCheckboxChange={handleModalCheckboxChange}
            />
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
