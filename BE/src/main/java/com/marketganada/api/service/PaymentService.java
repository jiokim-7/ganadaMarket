package com.marketganada.api.service;

import com.marketganada.api.request.AuctionInsertRequest;
import com.marketganada.api.request.KakaoPaySuccessRequest;
import com.marketganada.api.request.PaymentInsertRequest;
import com.marketganada.api.request.TrackingNumUpdateRequest;
import com.marketganada.common.KakaoPayApprovalVO;
import com.marketganada.common.KakaoPayReadyVO;
import com.marketganada.db.entity.Payment;
import com.marketganada.db.entity.User;

import java.util.List;
import java.util.Map;

public interface PaymentService {
    Map<String,Object> insertPayment(PaymentInsertRequest paymentInsertRequest, User user);
    KakaoPayReadyVO kakaoPayReady(PaymentInsertRequest paymentInsertRequest, User user);
    KakaoPayApprovalVO kakaoPayInfo(KakaoPaySuccessRequest kakaoPaySuccessRequest, User user);
    void successPayment(Long paymentId);
    String updateTrackingNum(Long paymentId,TrackingNumUpdateRequest request, User user);
    String confirmPayment(Long paymentId, User user);

    List<Payment> getOrderHistory(User user);
    List<Payment> getSalesHistory(User user);
}
