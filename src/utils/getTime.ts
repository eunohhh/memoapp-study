function getTime() {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true, // 12시간 형식을 사용하기 위해 true로 설정
    };

    const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(
        date
    );
    return formattedDate;
}

export default getTime;
